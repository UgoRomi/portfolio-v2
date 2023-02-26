import Box from '@/components/box';
import CV from '@/components/icons/cv';
import GitHub from '@/components/icons/github';

export default function Page() {
  return (
    <main className='px-6 pt-24 lg:px-36 2xl:px-96'>
      <h1 className='col-span-3 mb-5 font-sans text-7xl font-semibold italic'>
        Ugo Romi
      </h1>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-5'>
        <Box className='col-span-2 bg-fuchsia-500 text-4xl font-semibold'>
          <span>Senior Frontend Engineer</span>
        </Box>
        <Box
          className='flex flex-wrap items-center whitespace-pre-wrap border bg-stone-200 text-stone-900'
          icon={<CV className='h-9 w-9' />}
        >
          <span className='break-normal text-3xl'>
            Check out my{' '}
            <a
              className='cursor-pointer font-bold text-orange-500 underline decoration-dotted underline-offset-4'
              href='https://cv.ugoromi.dev'
              target='_blank'
            >
              CV
            </a>
          </span>
        </Box>
        <Box
          className='col-span-2 bg-black'
          icon={<GitHub className='h-8 w-8' />}
        >
          <a
            href='https://github.com/UgoRomi/'
            className='underline decoration-dashed underline-offset-4'
            target='_blank'
          >
            My unfinished side projects
          </a>
        </Box>
      </div>
    </main>
  );
}
