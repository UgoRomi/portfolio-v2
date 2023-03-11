import Box from '@/components/box';
import TopTrack from '@/components/top-track';
import CV from '@/components/icons/cv';
import GitHub from '@/components/icons/github';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ugo Romi',
  description: 'My Playground on the Web',
  colorScheme: 'dark',
  keywords: ['Ugo', 'Romi', 'Developer', 'Web'],
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
};

export default function Page() {
  return (
    <main className='px-6 pb-6 pt-24 lg:px-36 xl:px-44 2xl:px-96 3xl:px-[36rem] 4xl:px-[44rem]'>
      <h1 className='mb-5 font-sans text-7xl font-semibold italic'>Ugo Romi</h1>
      <div className='grid grid-cols-8 gap-3 lg:grid-cols-6 lg:gap-8'>
        <Box className='col-span-5 flex items-center border-2 border-fuchsia-500 text-4xl font-semibold lg:col-span-3'>
          <span>Senior Frontend Engineer</span>
        </Box>
        <Box className='col-span-3 flex items-center border-2 bg-fuchsia-600 text-2xl font-bold italic text-stone-800 lg:col-span-3 lg:text-3xl'>
          Building things that I enjoy
        </Box>
        <Box
          className='col-span-8 row-span-2 border bg-amber-500 text-stone-200 lg:col-span-4'
          icon={<CV className='h-12 w-12 lg:h-24 lg:w-24' />}
        >
          <span className='break-normal text-3xl leading-6 lg:text-5xl lg:leading-relaxed'>
            Check out my{' '}
            <a
              className='cursor-fancy font-bold text-stone-800 underline decoration-dotted underline-offset-4'
              href='https://cv.ugoromi.dev'
              target='_blank'
            >
              CV
            </a>
            , my{' '}
            <a
              className='cursor-fancy font-bold text-stone-800 underline decoration-dotted underline-offset-4'
              href='https://cv.ugoromi.dev'
              target='_blank'
            >
              Articles
            </a>{' '}
            and my{' '}
            <a
              className='cursor-fancy font-bold text-stone-800 underline decoration-dotted underline-offset-4'
              href='https://cv.ugoromi.dev'
              target='_blank'
            >
              Side Projects
            </a>
          </span>
        </Box>
        <Box className='col-span-6 flex items-center bg-stone-800 text-stone-900 lg:col-span-2'>
          <a
            className='cursor-fancy break-normal text-2xl italic text-fuchsia-500 underline decoration-dotted underline-offset-4 lg:text-3xl'
            href='https://cal.com/ugoromi/30min'
            target='_blank'
          >
            Let&apos;s have a chat
          </a>
        </Box>
        <Box
          className='col-span-5 bg-black lg:col-span-2'
          icon={<GitHub className='h-12 w-12' />}
        >
          <a
            href='https://github.com/UgoRomi/'
            className='cursor-fancy underline decoration-dashed underline-offset-4'
            target='_blank'
          >
            Here you can find some of my code
          </a>
        </Box>
        {/* @ts-expect-error Server Component */}
        <TopTrack />
        <Box className='col-span-2 border-2 border-fuchsia-500 text-2xl lg:col-span-2'>
          <a
            href='mailto:ugo.romi@gmail.com'
            className='cursor-fancy underline decoration-fuchsia-500 underline-offset-4'
          >
            ugo.romi@gmail.com
          </a>
        </Box>
      </div>
    </main>
  );
}
