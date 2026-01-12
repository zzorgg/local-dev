import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import firebaseLogo from '@/assets/firebase/firebase.svg'
import firebaseInvertedLogo from '@/assets/firebase/firebase-inverted.svg'
import dockerLogo from '@/assets/docker/docker.svg'
import localstackLogo from '@/assets/localstack/localstack.svg'
import gcsLogo from '@/assets/gcp/gcp.svg'
import s3Logo from '@/assets/aws/s3.svg'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Technologies and Frameworks</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex items-center justify-center h-10 w-24">
                                <img
                                    className="block dark:hidden h-full w-full object-contain"
                                    src={firebaseLogo}
                                    alt="Firebase Logo"
                                />
                                <img
                                    className="hidden dark:block h-full w-full object-contain"
                                    src={firebaseInvertedLogo}
                                    alt="Firebase Logo" />
                            </div>

                            <div className="flex items-center justify-center h-10 w-24">
                                <img
                                    className="h-full w-full object-contain"
                                    src={dockerLogo}
                                    alt="Docker Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center h-10 w-24">
                                <img
                                    className="h-full w-full object-cover"
                                    src={localstackLogo}
                                    alt="Localstack Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center h-10 w-24">
                                <img
                                    className="h-full w-full object-contain"
                                    src={gcsLogo}
                                    alt="Google Cloud Storage Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center h-10 w-24">
                                <img
                                    className="h-full w-full object-contain"
                                    src={s3Logo}
                                    alt="Amazon S3 Logo"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
