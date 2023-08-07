import type {
  NextPageWithLayout,
} from '@/interface';
import Layout from '@/layouts/_layout';
import {ShapesBg} from "@/components/auth/shapes-bg";
import FullLogo from "@/components/ui/logo/full";
import Emojis from "@/components/auth/emojis";
import LoginUserForm from "@/components/auth/login-form";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import Link from "@/components/ui/link";
import routes from "@/config/routes";



const Home: NextPageWithLayout = () => {
  return (
      <div className={'max-w-full mx-auto w-full flex min-h-screen'}>
          <div className="flex min-h-full flex-1">
              <div className="relative z-10 hidden flex-1 p-8 w-0 bg-grey-800 lg:block">
                 <ShapesBg className="absolute inset-0 h-full w-full object-cover" />
                 <div>
                     <FullLogo className={'w-56'} />
                 </div>
                  <div className={'flex h-full flex-col justify-center items-center relative z-20'}>
                      <div>
                          <Emojis />
                      </div>
                      <div className={'mt-8 text-center'}>
                          <h3 className={'font-bold text-3xl text-light'}>Easy to use Dashboard</h3>
                          <p className={'text-light text-sm pt-4 '}>
                              Let’s see what we have new, check it out! So maybe write here something more hehe.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="flex flex-1 flex-col justify-center items-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                  <ThemeSwitcher />
                  <div className="mt-10">
                      <div>
                          <LoginUserForm />
                      </div>

                      <div className="mt-4">
                          <div className="relative flex justify-center text-sm font-medium leading-6">
                              <p className={'text-sm font-semibold'}>
                                  Don't have an account? <Link href={routes.signUp} className={'text-brand hover:text-brand-light font-bold'}>Sign up</Link>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
