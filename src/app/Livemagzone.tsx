"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight, Star, Users, Rocket } from "lucide-react";

export default function Livemagzone() {
  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          DRIVING <span className="text-orange-500">DIGITAL</span> <br />
          <span className="text-orange-500">SUCCESS</span> TOGETHER
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-80">
          We help brands unlock growth with innovative design, strategy, and
          technology solutions.
        </p>
        <Button className="mt-8 rounded-full bg-orange-500 px-8 py-6 text-lg font-semibold text-white hover:bg-orange-600">
          Get Started <ArrowRight className="ml-2 inline h-5 w-5" />
        </Button>
      </section>

      {/* Stats Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-3">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-4xl font-bold text-orange-500">350+</h3>
            <p className="mt-2 text-lg font-medium">Projects Delivered</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-4xl font-bold text-orange-500">40+</h3>
            <p className="mt-2 text-lg font-medium">Expert Team Members</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-4xl font-bold text-orange-500">20+</h3>
            <p className="mt-2 text-lg font-medium">Industries Served</p>
          </CardContent>
        </Card>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-12 text-center text-4xl font-bold">
          SPECIALIZE IN PROVIDING <br />
          <span className="text-orange-500">TOP NOTCH SERVICES</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { title: "Creative Excellence", icon: <Sparkles /> },
            { title: "Collaborative Approach", icon: <Users /> },
            { title: "Cutting-edge Technology", icon: <Rocket /> },
          ].map((service, i) => (
            <Card
              key={i}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, facilis.
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Works Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">
          AWESOME <span className="text-orange-500">WORKS</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg"
            >
              <Image
                src={`/works/work${i}.jpg`}
                alt={`Work ${i}`}
                width={500}
                height={300}
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Project {i}</h3>
                <p className="text-sm text-gray-600">Description here...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">
          WHAT OUR <span className="text-orange-500">CLIENT SAYS</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[1, 2].map((i) => (
            <Card
              key={i}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg"
            >
              <p className="mb-4 text-gray-700">
                Working with Livemagzone was not just a service, it was a
                collaborative and enjoyable journey...
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-200" />
                <div>
                  <h4 className="font-semibold">Client Name</h4>
                  <p className="text-sm text-gray-500">CEO, Company</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-5xl font-extrabold">
          CREATE{" "}
          <span className="text-orange-500">
            NEW INNOVATION TOGETHER
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg opacity-80">
          Let’s collaborate to bring your ideas to life and achieve excellence
          in every project.
        </p>
        <Button className="mt-8 rounded-full bg-orange-500 px-8 py-6 text-lg font-semibold text-white hover:bg-orange-600">
          Contact Us <ArrowRight className="ml-2 inline h-5 w-5" />
        </Button>
      </section>
    </div>
  );
}
