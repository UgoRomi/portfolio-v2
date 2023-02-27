import Box from '@/components/box';
import TopTrack from '@/components/top-track';
import CV from '@/components/icons/cv';
import GitHub from '@/components/icons/github';

export default function Page() {
  return (
    <main className='px-6 pt-24 lg:px-36 2xl:px-96'>
      <h1 className='mb-5 font-sans text-7xl font-semibold italic'>Ugo Romi</h1>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-6'>
        <Box className='col-span-2 flex items-center bg-fuchsia-500 text-4xl font-semibold lg:col-span-4'>
          <span>Senior Frontend Engineer</span>
        </Box>
        <Box
          className='border bg-stone-200 text-stone-900 lg:col-span-2'
          icon={<CV className='h-12 w-12' />}
        >
          <span className='break-normal text-3xl'>
            Check out my{' '}
            <a
              className='cursor-fancy font-bold text-orange-500 underline decoration-dotted underline-offset-4'
              href='https://cv.ugoromi.dev'
              target='_blank'
            >
              CV
            </a>
          </span>
        </Box>
        <Box
          className='col-span-2 bg-black'
          icon={<GitHub className='h-12 w-12' />}
        >
          <a
            href='https://github.com/UgoRomi/'
            className='cursor-fancy underline decoration-dashed underline-offset-4'
            target='_blank'
          >
            My unfinished side projects
          </a>
        </Box>
        {/* @ts-expect-error Server Component */}
        <TopTrack />
      </div>
    </main>
  );
}
