import { Home, Search, ArrowRight, Check, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ResponsiveBar } from '@nivo/bar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { useState } from 'react';

export default function LandingPage() {
  const [search, setSearch] = useState('');

  return (
    (<div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Home className="w-8 h-8 text-gray-800" />
          <h1 className="text-xl font-bold">NextGen HotDogs</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-2">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
          <div className="md:hidden">
            <Search className="w-6 h-6 text-gray-800" />
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Revolutionizing the Hot Dog Industry</CardTitle>
              <CardDescription>Powered by Cryptocurrency & AI</CardDescription>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="NextGen HotDogs"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter>
              <Button>Learn More <ArrowRight className="ml-2" /></Button>
            </CardFooter>
          </Card>
        </section>
        <section className="mb-8">
          <Alert>
            <Check className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Our AI-powered hot dogs are now available for purchase with cryptocurrency.
            </AlertDescription>
          </Alert>
        </section>
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent>
                <Avatar>
                  <AvatarImage src="https://github.com/Yuyz0112.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold mt-2">AI-Enhanced Flavor</h3>
                <p>Experience the taste of the future with our AI-crafted recipes.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline">New</Badge>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <AspectRatio ratio={1}>
                  <img
                    src="https://images.unsplash.com/photo-1601314002592-b8734bca6604?w=800&dpr=2&q=80"
                    alt="Cryptocurrency"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <h3 className="text-lg font-bold mt-2">Crypto Payments</h3>
                <p>Secure and fast transactions with your favorite cryptocurrencies.</p>
              </CardContent>
              <CardFooter>
                <div value={75} />
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-bold">Community Driven</h3>
                <p>Join the community and help shape the future of hot dogs.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Join Now</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="mb-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p>Discover the innovative features of our next-generation hot dogs.</p>
            </TabsContent>
            <TabsContent value="reviews">
              <p>Read what our customers are saying about their experience.</p>
            </TabsContent>
            <TabsContent value="stats">
              <div className="w-full h-64">
                <ResponsiveBar
                  data={[
                    { name: "Sales", data: 100 },
                    { name: "Feedback", data: 200 },
                    { name: "Growth", data: 150 },
                  ]}
                  keys={["data"]}
                  indexBy="name"
                  margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "paired" }}
                  borderWidth={1}
                  borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                  }}
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>
        <section className="mb-8">
          <Label htmlFor="newsletter">Subscribe to our Newsletter</Label>
          <div className="flex mt-2">
            <Input
              id="newsletter"
              placeholder="Enter your email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
            />
            <Button variant="outline" className="ml-2">Subscribe</Button>
          </div>
        </section>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <p>© 2021 NextGen HotDogs. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <User className="w-6 h-6 text-gray-800" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Search className="w-6 h-6 text-gray-800" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Search</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </footer>
    </div>)
  );
}