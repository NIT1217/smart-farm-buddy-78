import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Lightbulb, Leaf } from "lucide-react";

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content: "Hello! I'm your AI farming assistant. I can help you with crop management, weather analysis, and farming best practices. What would you like to know?",
      timestamp: "10:30 AM"
    },
    {
      id: 2,
      type: "user", 
      content: "What's the best time to harvest my tomatoes?",
      timestamp: "10:32 AM"
    },
    {
      id: 3,
      type: "assistant",
      content: "Based on your crop data, your tomatoes show 95% health and are in flowering stage. For optimal harvest, wait until they reach full color but are still firm. I recommend harvesting in 2-3 weeks when the temperature is cooler, preferably early morning.",
      timestamp: "10:33 AM",
      suggestions: ["Pest prevention tips", "Fertilizer recommendations", "Weather forecast impact"]
    }
  ]);

  const [inputValue, setInputValue] = useState("");

  const quickQuestions = [
    "When should I water my crops?",
    "How's the weather looking?", 
    "Any pest alerts?",
    "Soil health recommendations"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setInputValue("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "assistant" as const,
        content: "I'm analyzing your farm data to provide the best recommendations. This feature will provide intelligent insights based on your specific crops and conditions.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: ["More details", "Related tips", "Schedule reminder"]
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
              <Bot className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              AI Farming Assistant
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized advice and insights powered by artificial intelligence 
              to optimize your farm's productivity.
            </p>
          </div>

          <Card className="bg-gradient-card border-0 shadow-farm overflow-hidden">
            {/* Chat Header */}
            <div className="p-6 border-b bg-primary text-primary-foreground">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
                  <Leaf className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Smart Farm AI</h3>
                  <p className="text-sm opacity-90">Always ready to help</p>
                </div>
                <Badge variant="secondary" className="ml-auto">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  Online
                </Badge>
              </div>
            </div>

            {/* Chat Messages */}
            <ScrollArea className="h-96 p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <Avatar className="w-8 h-8 mx-2">
                        <AvatarFallback className={message.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}>
                          {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`p-3 rounded-lg ${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === 'user' 
                            ? 'text-primary-foreground/70' 
                            : 'text-muted-foreground'
                        }`}>
                          {message.timestamp}
                        </p>
                        {message.suggestions && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {message.suggestions.map((suggestion, index) => (
                              <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-accent">
                                <Lightbulb className="w-3 h-3 mr-1" />
                                {suggestion}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Quick Questions */}
            <div className="px-6 py-3 border-t bg-muted/30">
              <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="sm"
                    className="text-xs"
                    onClick={() => setInputValue(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-6 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about your crops, weather, or farming tips..."
                  className="flex-1"
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} className="px-4">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;