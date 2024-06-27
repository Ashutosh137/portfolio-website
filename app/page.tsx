import { PinContainer } from "@/components/ui/3d-pin";
import { Meteors, WobbleCard } from "@/components/ui/card";
import Card_list, {
  Card,
  CardDescription,
  CardTitle,
  Card_button,
  HoverEffect,
} from "@/components/ui/card-hover";
import IconCloud from "@/components/ui/cloud-icon-theme";
import { CoolMode } from "@/components/ui/cool-mode";
import { FlipWords } from "@/components/ui/fip-words";
import { GlareCard } from "@/components/ui/glard-card";
import { GlowingStarsBackgroundCard } from "@/components/ui/glow-star";
import { HeroParallax, ProductCard } from "@/components/ui/hero-parallex";
import { LinkPreview } from "@/components/ui/link-preview";
import Navbar from "@/components/ui/navbar";
import TextRevealByWord from "@/components/ui/revel";
import { ContainerScroll } from "@/components/ui/scroll";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import image1 from "@/public/html.f3aa7827cd5160f3fc1c.png";
import image2 from "@/public/screenshot2.png";
import image3 from "@/public/screenshot3.png";
import image4 from "@/public/screenshot4.png";
import Image from "next/image";
export default function Home() {
  interface Project {
    title: string;
    description: string;
    image: string;
    live_link: string;
    github: string;
    tech: string[];
  }

  interface SkillIcon {
    thumbnail: any;
    title: string;
  }
  interface Home {
    thumbnail: any;
    title: string;
    link: string;
  }
  const dashboard: Home[] = [
    {
      title: "sfs",
      link: "sfkgf",
      thumbnail: image1,
    },
    {
      title: "sfs",
      link: "sfkgf",
      thumbnail: image2,
    },
    {
      title: "sfs",
      link: "sfkgf",
      thumbnail: image3,
    },
    {
      title: "sfs",
      link: "sfkgf",
      thumbnail: image4,
    },
    {
      title: "sfs",
      link: "sfkgf",
      thumbnail: image1,
    },
    {
      title: "sfs",
      link: "sfkgf",
      thumbnail: image4,
    },
  ];

  const main_project: Project[][] = [
    {
      title: "socialite : ",
      description:
        "Spearheaded the development of Socialite from inception to completion, employing React.js, Tailwind CSS, and Firebase. This initiative yielded a notable 50% surge in user engagement and a 30% reduction in page loading times. ",
      live_link: "https://socialite-ashutosh.vercel.app/",
      tech: [
        "react js ",
        "firebassndlknnde",
        "react js ",
        "firebase",
        "react js ",
      ],
    },
    {
      title: "quotoverse",
      description:
        "Spearheaded the development of Socialite from inception to completion, employing React.js, Tailwind CSS, and Firebase. This initiative yielded a notable 50% surge in user engagement and a 30% reduction in page loading times. ",
      live_link: "ndknfs",
      tech: ["srting"],
    },
    {
      title: "unleashed fitness",
      description:
        "Spearheaded the development of Socialite from inception to completion, employing React.js, Tailwind CSS, and Firebase. This initiative yielded a notable 50% surge in user engagement and a 30% reduction in page loading times. ",
      live_link: "ndknfs",
      tech: ["srting"],
    },
  ];

  const other_projects: Project[][] = [
    {
      title: "A simple website",
      description: "A simple website made with nextjs and tailwindcss",
      link: "https://github.com/ahmed-ahmed-ahmed/simple-website",
      tech: ["string"],
    },
  ];

  const skills_icons: SkillIcon[][] = [
    {
      thumbnail: image1,
      title: "html",
    },
  ];
  return (
    <div className="flex flex-col justify-center ">
      <Navbar />
      <HeroParallax products={dashboard} />
      <div className="flex relative ">
        <TextRevealByWord
          className="ml-auto"
          text="I'm passionate about crafting digital solutions. As a dedicated web developer, I thrive on creating impactful and user-centric online experiences. I'm deeply engaged in the process of building innovative and accessible solutions. Currently, I'm honing my skills and contributing to the world of technology."
        />
      </div>

      <div className="max-w-screen-xl m-auto capitalize  ">
        <h2 className="text-3xl mt-16 text-pretty text-sky-100 font-extrabold font-sans ml-10 ">
          some things that i've build
        </h2>
        <HoverEffect className="mx-4" items={main_project} />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl mt-16 text-pretty capitalize  font-extrabold font-sans  ">
          <FlipWords
            className="text-sky-100"
            words={["skills", "exerpities"]}
          />
        </h2>
        <div className="sm:flex block my-5 justify-between align-middle space-x-5 w-full space-y-5 ">
          <div className=" h-full  mx-auto  w-full ">
            <IconCloud
              iconSlugs={[
                "javascript",
                "typescript",
                "visualstudiocode",
                "amazonaws",
                "angular",
                "github",
                "git",
                "react",
                "html",
                "html5",
                "linkdin",
                "mongodb",
                "html5",
                "chatbot",
                "chartdotjs",
                "socketdotio",
                "sqlite",
                "svg",
                "tailwindcss",
                "mongodb",
                "nestjs",
                "nextdotjs",
                "nodedotjs",
                "normalizedotcss",
                "npm",
                "numpy",
                "nuxtdotjs",
                "nvm",
                "openai",
                "p5dotjs",
                "d3.js",
                "redox",
                "reddit",
                "redwoodjs",
                "reactbootstrap",
                "reacthookform",
                "reactquery",
                "reactrouter",
                "mambaui",
                "underscoredotjs",
                "webrtc",
                "web3dotjs",
                "youtube",
                "reduxsaga",
                "ruby",
                "scipy",
                "threedotjs",
                "json",
                "jsonwebtokens",
                "mysql",
                "postgresssql",
                "css",
                "figma",
                "nextjs",
                "coder",
                "graphql",
                "rest",
                "firebase",
                "django",
                "flask",
                "vercel",
                "python",
                "rust",
                "docker",
                "aws",
              ]}
            />
          </div>
          <div className="grid w-full grid-cols-2 sm:grid-cols-6 auto-rows-[5rem]  gap-5  mx-2 sm:mx-auto max-w-screen-xl">
            {skills_icons.map((skill, index) => {
              return (
                <ProductCard
                  className="w-[5rem] mx-auto"
                  key={index}
                  product={skill}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl mt-16 text-pretty capitalize  font-extrabold font-sans  ">
          <FlipWords
            className="text-sky-100"
            words={["other products", "previoes"]}
          />
        </h2>
        <div className="sm:flex block my-5 justify-between align-middle space-x-5 w-full space-y-5 ">
          <div className="grid w-full grid-cols-1 sm:grid-cols-3   gap-5  mx-2 sm:mx-auto max-w-screen-xl">
            {other_projects.map((item, index) => {
              return (
                <WobbleCard key={index} className="bg-zinc-900 m-1">
                  <Card className="mx-auto ">
                    <Meteors />
                    <CardTitle className="text-2xl pb-2 capitalize text-center">
                      {item.title}
                    </CardTitle>
                    <ul className="flex space-x-2 capitalize flex-wrap w-full my-2 justify-center">
                      {item.tech.map((tech, ind) => {
                        return (
                          <Card_list key={ind} className="capitalize">
                            {tech}
                          </Card_list>
                        );
                      })}
                    </ul>
                    <CardDescription className="">
                      {item.description}
                    </CardDescription>

                    <div className=" mt-8 flex justify-center space-x-6">
                      <Card_button link={item.github_link}>github</Card_button>
                      <Card_button link={item.live_link}>link</Card_button>
                    </div>
                  </Card>
                </WobbleCard>
              );
            })}
            jvjh hvh vh yfyflorem Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis magnam blanditiis minus magni odio
            laborum fugiat? Soluta repellat blanditiis cumque suscipit nihil!
            Ducimus libero deleniti molestiae aut labore similique nostrum.
          </div>
        </div>
      </div>

      <ContainerScroll>
        <LinkPreview className="text-white" url="">
          kwfwek knlndclsnclknafs
        </LinkPreview>
      </ContainerScroll>
      {/* <PinContainer title="ashut" href="dfsj">
      <TextGenerateEffect words="loremcndsjds fkjbk cdsbjkkjdfjsjfkjkcfkjbfkjdbfkjgeu xbff" />
    </PinContainer> */}
    </div>
  );
}
