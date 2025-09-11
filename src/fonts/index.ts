import localFont from "next/font/local";

export const geistMono = localFont({
       src: [
              {
                     path: "../../public/fonts/Geist_Mono/GeistMono-Thin.woff2",
                     weight: "100",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/Geist_Mono/GeistMono-ExtraLight.woff2",
                     weight: "200",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/Geist_Mono/GeistMono-Light.woff2",
                     weight: "300",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/Geist_Mono/GeistMono-Regular.woff2",
                     weight: "400",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/Geist_Mono/GeistMono-Medium.woff2",
                     weight: "500",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/Geist_Mono/GeistMono-SemiBold.woff2",
                     weight: "600",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/Geist_Mono/GeistMono-Bold.woff2",
                     weight: "700",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/Geist_Mono/GeistMono-ExtraBold.woff2",
                     weight: "800",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/Geist_Mono/GeistMono-Black.woff2",
                     weight: "900",
                     style: "normal",
              },
       ],
       variable: "--font-geist-mono",
       display: "swap",
});

export const inter = localFont({
       src: [
              {
                     path: "../../public/fonts/inter-ui/Inter-UI-Regular.woff2",
                     weight: "400",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/inter-ui/Inter-UI-Medium.woff2",
                     weight: "500",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/inter-ui/Inter-UI-Bold.woff2",
                     weight: "700",
                     style: "normal",
              },
              {
                     path: "../../public/fonts/inter-ui/Inter-UI-Black.woff2",
                     weight: "900",
                     style: "normal",
              },
       ],
       variable: "--font-inter",
       display: "swap",
});
