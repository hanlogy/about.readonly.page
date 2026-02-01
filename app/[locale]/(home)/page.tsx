import { MainContainer } from '@/components/MainContainer';
import { BenefitCard } from './components/BenefitCard';
import { CTAButton } from './components/CTAButton';

const benefits = [
  {
    title: 'Keep docs where they are',
    description:
      'Use your existing URLs (GitHub, S3, your server). No copying.',
  },
  {
    title: 'Privacy-first',
    description:
      'No uploads, no tracking, no server-side storage of your content.',
  },
  {
    title: 'Doc library',
    description: 'Manage your doc links in your browser.',
  },
  {
    title: 'Single file or full collection',
    description: 'Read one doc, or a folder with sidebar navigation.',
  },
];

export default function LocaleHome() {
  return (
    <>
      <MainContainer className="flex flex-col items-center py-12 text-center sm:py-16 lg:pt-22 xl:py-28">
        <h1 className="text-4xl font-semibold sm:text-5xl xl:text-6xl">
          A doc reader from a URL
        </h1>
        <div className="mt-6 max-w-3xl px-4 text-lg leading-relaxed text-gray-600 sm:mt-10 xl:text-xl">
          Keep your docs where they are - read them here, privately. No uploads,
          no tracking.
        </div>
        <div className="mt-3 text-[1.2em] font-semibold">
          Free, and open-source.
        </div>
        <span className="mt-8 text-sm text-gray-500 italic">
          Only support Markdown for now.
        </span>
        <div className="flex w-60 flex-col space-y-2 pt-12 md:w-auto md:flex-row md:space-y-0 md:space-x-4 md:pt-16">
          <CTAButton
            href="https://readonly.page"
            className="bg-gray-800 text-white"
          >
            Open Readonly.page
          </CTAButton>
          <CTAButton href="./docs" className="border border-gray-300 bg-white">
            Read tutorial
          </CTAButton>
        </div>
      </MainContainer>
      <div className="border-t border-b border-gray-200 bg-gray-50">
        <MainContainer className="pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-22 xl:pt-22 xl:pb-28">
          <h2 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl xl:mb-12 xl:text-4xl">
            Why Readonly.page?
          </h2>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {benefits.map(({ title, description }) => {
              return (
                <BenefitCard
                  title={title}
                  description={description}
                  key={title}
                />
              );
            })}
          </div>
        </MainContainer>
      </div>

      <MainContainer className="px:pb-30 flex flex-col items-center pt-10 pb-12 text-center sm:pt-12 sm:pb-12 lg:pt-22 lg:pb-22 xl:pt-28">
        <h2 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl xl:mb-12 xl:text-4xl">
          Self-hosting
        </h2>
        <p className="px-4 text-gray-600 sm:text-lg lg:text-xl">
          readonly.page is a static web app. Host it anywhere that serves static
          files. No backend, no database.
        </p>
        <div className="mt-12 lg:mt-18">
          <CTAButton
            className="bg-gray-800 px-8 text-white"
            href="https://github.com/hanlogy/web.readonly.page?tab=readme-ov-file#self-hosting"
          >
            Go to GitHub
          </CTAButton>
        </div>
      </MainContainer>
    </>
  );
}
