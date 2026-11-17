"""Fetches daily Indian app / UPI / digital India headlines from Google News RSS into data/news.json.
Run by automation/daily-news.yml once copied into .github/workflows/. Stdlib only."""
import json, os, urllib.request, urllib.parse, xml.etree.ElementTree as ET, datetime, email.utils
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUERIES = ["India app launch", "UPI NPCI", "government app India launched", "Indian startup app", "DigiLocker OR UMANG OR Sanchar Saathi", "app fraud India cybercrime"]
seen, items = set(), []
for q in QUERIES:
    url = "https://news.google.com/rss/search?" + urllib.parse.urlencode({"q": q + " when:7d", "hl": "en-IN", "gl": "IN", "ceid": "IN:en"})
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (AppBharat news bot)"})
        root = ET.fromstring(urllib.request.urlopen(req, timeout=20).read())
    except Exception as e:
        print("skip", q, e); continue
    for it in root.iter("item"):
        t = (it.findtext("title") or "").strip()
        src = it.findtext("source") or ""
        if src and t.endswith(" - " + src): t = t[: -len(src) - 3]
        key = t.lower()[:80]
        if not t or key in seen: continue
        seen.add(key)
        try: d = email.utils.parsedate_to_datetime(it.findtext("pubDate")).isoformat()
        except Exception: d = None
        items.append({"title": t, "link": it.findtext("link"), "source": src, "date": d})
items.sort(key=lambda x: x["date"] or "", reverse=True)
if items:
    json.dump({"updated": datetime.datetime.now(datetime.timezone.utc).isoformat(), "items": items[:60]}, open(os.path.join(ROOT, "data/news.json"), "w"), ensure_ascii=False, indent=1)
print("items:", len(items))
