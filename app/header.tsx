'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-items-start gap-3">
      <Image
        src="/profile.png"
        alt="picture of jonathan mooney"
        width={40}
        height={40}
        style={{ borderRadius: '50%' }}
      />
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Jonathan Mooney
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
