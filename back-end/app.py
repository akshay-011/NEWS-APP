from fastapi import FastAPI, HTTPException
from gnews import GNews
import asyncio
from fastapi.responses import JSONResponse

app = FastAPI()
news = GNews(max_results=20)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origin=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
#     allow_credentials=True,
# )

TOPICS = ['WORLD', 'NATION', 'BUSINESS', 'TECHNOLOGY', 'ENTERTAINMENT', 'SPORTS', 'SCIENCE', 'HEALTH']
LOOP =  asyncio.get_event_loop()

@app.get("/get_latest_news/")
async def latestNews():
    print("[*] Fetching Top News....")
    top_news = await LOOP.run_in_executor(None, news.get_top_news)
    if not top_news or len(top_news) <= 0:
        print("[*] News Fetche Failed...")
        return HTTPException(status_code=504, detail="Try again some issue") 
    print("[*] Top News Fetched")
    return JSONResponse(content=top_news)


@app.get("/get_news_by_topic/{topic}")
async def getNewsByTopic(topic: str):
    topic = topic.upper()

    if topic not in TOPICS:
        print(f"[*] Topic Invalid ({topic})....")
        return HTTPException(status_code=400, detail="Send Valid Topic")
    
    print(f"[*] Fetching News for {topic}....")
    topicNews = await LOOP.run_in_executor(None, news.get_news_by_topic, topic)
    if not topicNews or len(topicNews) <= 0:
        return HTTPException(status_code=504, detail="Try again some issue") 
    print(f"[*] News Fetched for {topic}")
    return topicNews

