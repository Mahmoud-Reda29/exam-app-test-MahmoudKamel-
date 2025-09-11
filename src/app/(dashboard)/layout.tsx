import AsidebarRoot from "@components/features/dashboard/asidebar";
import Container from "@components/features/dashboard/container";
import Header from "@components/features/dashboard/header";
import Providers from "@components/providers";

export default function Layout({
       children,
}: Readonly<{
       children: React.ReactNode;
}>) {
       return (
              <div className="flex">
                     <AsidebarRoot />

                     <Container id="scroll-react-infinity" className="bg-gray-50">
                            <Header />
                            <Providers>
                            {children}
                            </Providers>
                     </Container>
              </div>
       );
}