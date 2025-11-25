'use client'
import { motion } from 'motion/react'
import {
  XIcon,
  MailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { PROJECTS, WORK_EXPERIENCE, BLOG_POSTS } from './data'
import Image from 'next/image'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function SocialIconLink({
  href,
  label,
  colorClass,
  children,
}: {
  href: string
  label: string
  colorClass: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`transition-all duration-200 ease-out hover:scale-110 active:scale-95 ${colorClass}`}
    >
      {children}
    </a>
  )
}

function LetterboxdIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="5" cy="12" r="4" fill="#00E054" />
      <circle cx="12" cy="12" r="4" fill="#40BCF4" />
      <circle cx="19" cy="12" r="4" fill="#FF8000" />
    </svg>
  )
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function MagneticDownloadLink({
  children,
  label,
}: {
  children: React.ReactNode
  label: string
}) {
  const handleClick = async () => {
    const response = await fetch('/api/file')
    const blob = await response.blob()

    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'jonathan_mooney_resume.pdf'
    link.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <button
        onClick={handleClick}
        className="relative m-2 inline-flex shrink-0 items-center gap-[5px] rounded-full bg-zinc-100 px-5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 9.29289L10.1464 7.14645C10.3417 6.95118 10.6583 6.95118 10.8536 7.14645C11.0488 7.34171 11.0488 7.65829 10.8536 7.85355L7.85355 10.8536C7.65829 11.0488 7.34171 11.0488 7.14645 10.8536L4.14645 7.85355C3.95118 7.65829 3.95118 7.34171 4.14645 7.14645C4.34171 6.95118 4.65829 6.95118 4.85355 7.14645L7 9.29289L7 2.5C7 2.22386 7.22386 2 7.5 2ZM3 12C3 11.7239 3.22386 11.5 3.5 11.5L11.5 11.5C11.7761 11.5 12 11.7239 12 12C12 12.2761 11.7761 12.5 11.5 12.5L3.5 12.5C3.22386 12.5 3 12.2761 3 12Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Self-taught developer with six years of experience building web
            applications that solve real problems for real people
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <SocialIconLink
              href="mailto:mail@jonathanmooney.me"
              label="Email"
              colorClass="text-zinc-500 hover:text-zinc-300"
            >
              <MailIcon className="h-5 w-5" />
            </SocialIconLink>
            <SocialIconLink
              href="https://github.com/moonejon"
              label="GitHub"
              colorClass="text-zinc-400 hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </SocialIconLink>
            <SocialIconLink
              href="https://instagram.com/moonejon"
              label="Instagram"
              colorClass="text-pink-400/70 hover:text-pink-400"
            >
              <InstagramIcon className="h-5 w-5" />
            </SocialIconLink>
            <SocialIconLink
              href="https://linkedin.com/in/moonejon"
              label="LinkedIn"
              colorClass="text-blue-400/70 hover:text-blue-400"
            >
              <LinkedinIcon className="h-5 w-5" />
            </SocialIconLink>
            <SocialIconLink
              href="https://letterboxd.com/jonathanmooney"
              label="Letterboxd"
              colorClass="opacity-70 hover:opacity-100"
            >
              <LetterboxdIcon className="h-5 w-5" />
            </SocialIconLink>
            <SocialIconLink
              href="https://open.spotify.com/user/moonejj"
              label="Spotify"
              colorClass="text-green-400/70 hover:text-green-400"
            >
              <SpotifyIcon className="h-5 w-5" />
            </SocialIconLink>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Latest Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative w-fit rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                {project.video && <ProjectVideo src={project.video} />}
                {project.image && (
                  <Image
                    alt="screenshot of Penumbra library page"
                    src="/penumbra-demo.png"
                    className="rounded-xl"
                    width={300}
                    height={200}
                  />
                )}
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <MagneticDownloadLink label="Download Resume">
          Resume
        </MagneticDownloadLink>
      </motion.section>

      {/*<motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>*/}

    </motion.main>
  )
}
