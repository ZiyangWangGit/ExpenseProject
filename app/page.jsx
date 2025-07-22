import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES,HOW_IT_WORKS  } from "@/lib/data";

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* ───── Hero ───── */}
      <section className="mt-20 pb-12 space-y-10 md:space-y-15 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge variant="outline" className="bg-pink-100 text-pink-700">
            Track Smart, Spend Smarter.
          </Badge>

          <h1 className="slogan-title mx-auto max-w-6xl text-4xl font-bold md:text-8xl">
            Track Every Penny, Save Every Dollar!
          </h1>

          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Know Where Your Money Goes.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Button
              asChild
              size="lg"
              className="bg-pink-100 text-pink-700 hover:bg-pink-700 hover:text-white"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* First Wave Divider */}
      <div className="relative h-16 w-full -mt-1">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 left-0 w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor" 
            className="text-pink-50"
          ></path>
        </svg>
      </div>

       {/* ───── How It Works ───── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 mb-12">
            Everything you need to manage shared expenses effortlessly
          </p>
          
          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Second Wave Divider */}
      <div className="relative h-16 w-full -mt-1">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 left-0 w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor" 
            className="text-pink-50"
          ></path>
        </svg>
      </div>

      {/* ───── Features Section ───── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 mb-12">
            Everything you need to manage shared expenses effortlessly
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <Card key={title} className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6 text-center flex flex-col items-center h-full">
                  <div className={`rounded-full p-3 ${bg} mb-4`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-500 flex-grow">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* First Wave Divider */}
      <div className="relative h-16 w-full">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 left-0 w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor" 
            className="text-pink-50"
          ></path>
        </svg>
      </div>
    </div>
  );
}