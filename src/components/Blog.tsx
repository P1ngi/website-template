import { Calendar, User, ArrowRight, Play, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
}

const Blog = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);

  const CHANNEL_ID = "UCYourChannelId"; // We'll need to extract this from the channel URL

  useEffect(() => {
    const savedApiKey = localStorage.getItem('youtube_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      fetchVideos(savedApiKey);
    }
  }, []);

  const fetchVideos = async (key: string) => {
    setLoading(true);
    try {
      // First, get the channel ID from the channel handle
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=lilahinamida&key=${key}`
      );
      const channelData = await channelResponse.json();
      
      let channelId = CHANNEL_ID;
      if (channelData.items && channelData.items.length > 0) {
        channelId = channelData.items[0].id;
      }

      // Then fetch the latest videos
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=6&order=date&type=video&key=${key}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }

      const data = await response.json();
      const videoData: YouTubeVideo[] = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
        publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString(),
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`
      }));

      setVideos(videoData);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      // Fallback to sample data if API fails
      setVideos([
        {
          id: "1",
          title: "Latest Photography Tips",
          description: "Check out my latest photography tips and techniques",
          thumbnail: "/lovable-uploads/3808693c-0780-46d0-b7f9-b3ad808315ca.png",
          publishedAt: new Date().toLocaleDateString(),
          url: "https://www.youtube.com/@lilahinamida"
        },
        {
          id: "2", 
          title: "Behind the Scenes",
          description: "Take a look behind the scenes of my photography process",
          thumbnail: "/lovable-uploads/d1ff5244-53bb-409b-aff5-61f41c7b9028.png",
          publishedAt: new Date().toLocaleDateString(),
          url: "https://www.youtube.com/@lilahinamida"
        }
      ]);
    }
    setLoading(false);
  };

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      localStorage.setItem('youtube_api_key', apiKey);
      setShowApiKeyInput(false);
      fetchVideos(apiKey);
    }
  };

  const openVideo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest YouTube Videos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch my latest photography content and tutorials
          </p>
        </div>

        {!apiKey && (
          <div className="text-center mb-8">
            <Button 
              onClick={() => setShowApiKeyInput(!showApiKeyInput)}
              variant="outline"
              className="mb-4"
            >
              <Key size={16} className="mr-2" />
              Add YouTube API Key to Load Videos
            </Button>
            
            {showApiKeyInput && (
              <div className="max-w-md mx-auto space-y-4">
                <Input
                  type="password"
                  placeholder="Enter your YouTube Data API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <Button onClick={handleApiKeySubmit}>
                  Save & Load Videos
                </Button>
                <p className="text-sm text-muted-foreground">
                  Get your API key from <a href="https://console.developers.google.com/" target="_blank" className="text-primary hover:underline">Google Cloud Console</a>
                </p>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-muted animate-pulse"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded animate-pulse mb-2"></div>
                  <div className="h-6 bg-muted rounded animate-pulse mb-3"></div>
                  <div className="h-16 bg-muted rounded animate-pulse mb-4"></div>
                  <div className="h-10 bg-muted rounded animate-pulse"></div>
                </CardContent>
              </Card>
            ))
          ) : (
            videos.map((video) => (
              <Card key={video.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => openVideo(video.url)}>
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <Play size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>Sunny</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{video.publishedAt}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  <Button variant="outline" className="group/btn w-full">
                    Watch Video
                    <Play size={16} className="ml-2 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;