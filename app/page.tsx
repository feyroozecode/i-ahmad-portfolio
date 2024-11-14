"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  BookOpen,

} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-green-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
              Ibrahim Ahmad
            </h1>
            <p className="text-xl mb-6 text-green-700">
              Flutter | Jetpack Compose | SwiftUI
            </p>
            <p className="mb-6 text-green-800">
              7+ years of crafting beautiful and performant mobile applications.
              Open for exciting freelancing opportunities.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQGB1R8aUMpm4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721624240508?e=1736985600&v=beta&t=YSg-hg44ur1TvL56C_HN9J-d3Ku5wspKPsIo3Y7TeCc"
                alt="Developer Portrait"
                width={256}
                height={256}
                className="rounded-full"
              />
              <motion.div
                className="absolute inset-0 border-4 border-green-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <motion.section
        className="py-16 bg-green-200"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-green-800"
            variants={fadeInUp}
          >
            Skills
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={staggerChildren}
          >
            {[
              "Flutter",
              "Dart",
              "Jetpack Compose",
              "Kotlin",
              "SwiftUI",
              "Swift",
              "React Native",
              "JavaScript",
              "Git",
              "CI/CD",
            ].map((skill) => (
              <motion.div key={skill} variants={fadeInUp}>
                <Badge
                  variant="secondary"
                  className="text-lg py-2 px-4 bg-green-100 text-green-800 hover:bg-green-300 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects, Articles, and Open Source Tabs */}
      <section className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              <Code className="mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="articles"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              <BookOpen className="mr-2" />
              Articles
            </TabsTrigger>
            <TabsTrigger
              value="opensource"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              <Github className="mr-2" />
              Open Source
            </TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  title: "Fitness Tracker",
                  description:
                    "A Flutter app for tracking workouts and nutrition",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Social Media App",
                  description:
                    "A Jetpack Compose app for connecting with friends",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "E-commerce Platform",
                  description: "A SwiftUI app for online shopping",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-green-700">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-600 hover:bg-green-600 hover:text-white transition-colors"
                      >
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="articles">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  title: "Mastering Flutter State Management",
                  date: "May 15, 2023",
                },
                {
                  title: "Jetpack Compose vs SwiftUI: A Comparison",
                  date: "April 2, 2023",
                },
                {
                  title: "Building Accessible Mobile Apps",
                  date: "March 10, 2023",
                },
              ].map((article, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-green-700">
                        {article.title}
                      </CardTitle>
                      <CardDescription>{article.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="link"
                        className="text-green-600 hover:text-green-800 transition-colors"
                      >
                        Read More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="opensource">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  name: "FlutterWidgets",
                  description: "A collection of custom Flutter widgets",
                  stars: 230,
                },
                {
                  name: "JetpackComposables",
                  description: "Reusable Jetpack Compose components",
                  stars: 180,
                },
              ].map((repo, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-green-700">
                        {repo.name}
                      </CardTitle>
                      <CardDescription>{repo.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-green-600">
                        <Github className="mr-2 h-4 w-4" />
                        <span>{repo.stars} stars</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Contact Section */}
      <motion.section
        className="bg-green-800 text-white py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>
            Lets Create Something Amazing
          </motion.h2>
          <motion.p className="mb-8 text-green-200" variants={fadeInUp}>
            Im open for freelancing opportunities. Lets bring your ideas to
            life!
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-white text-green-800 hover:bg-green-100 transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Ibrahim Ahmad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
