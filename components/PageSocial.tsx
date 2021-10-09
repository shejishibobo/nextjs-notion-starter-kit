import React from 'react'
import cs from 'classnames'

import * as config from 'lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.twitter && {
    name: 'twitter',
    href: `https://twitter.com/${config.twitter}`,
    title: `Twitter @${config.twitter}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' />
      </svg>
    )
  },

  config.github && {
    name: 'github',
    href: `https://github.com/${config.github}`,
    title: `GitHub @${config.github}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    )
  },
  
  config.pinterest && {
    name: 'pinterest',
    href: `https://www.pinterest.com/${config.pinterest}`,
    title: `Pinterest @${config.pinterest}`,
    icon: (
      <svg t="1633774411682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2397" width="200" height="200"><path d="M512 0C229.236364 0 0 229.236364 0 512s229.236364 512 512 512c282.763636 0 512-229.236364 512-512S794.763636 0 512 0zM559.104 667.042909c-37.841455 0-73.448727-20.898909-85.690182-44.637091 0 0-20.340364 82.478545-24.669091 98.397091-7.261091 26.903273-21.271273 53.76-34.257455 75.031273-18.525091 24.203636-39.889455 6.237091-42.449455-15.825455-0.837818-24.576 0.046545-53.666909 6.144-80.151273 6.749091-29.044364 45.102545-195.072 45.102545-195.072s-11.217455-22.853818-11.217455-56.645818c0-53.061818 30.114909-92.672 67.630545-92.672 31.883636 0 47.290182 24.482909 47.290182 53.76 0 32.721455-20.433455 81.687273-30.952727 127.022545-8.797091 37.981091 18.664727 68.933818 55.342545 68.933818 66.420364 0 111.197091-87.133091 111.197091-190.324364 0-78.475636-51.758545-137.169455-145.92-137.169455-106.356364 0-172.637091 80.989091-172.637091 171.426909 0 31.185455 8.983273 53.201455 23.133091 70.190545 6.469818 7.819636 7.400727 10.984727 5.026909 19.968-1.675636 6.609455-5.538909 22.434909-7.121455 28.718545-2.327273 9.076364-9.541818 12.288-17.547636 8.936727-49.012364-20.433455-71.819636-75.217455-71.819636-136.750545 0-101.701818 84.014545-223.650909 250.600727-223.650909 133.864727 0 221.975273 98.909091 221.975273 205.079273C748.311273 562.129455 671.837091 667.042909 559.104 667.042909z" p-id="2398"></path></svg>
    )
  },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  }
].filter(Boolean)

export const PageSocial: React.FC = () => {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
