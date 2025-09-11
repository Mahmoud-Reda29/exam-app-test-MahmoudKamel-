import Diplomas from "@components/features/dashboard/diplomas";
import HeaderPage from "@components/features/dashboard/header-page";
import GraduationCapIcon from "@public/icons/graduation-cap";


export default function Home() {
       return (
       <>
              <HeaderPage 
                     icon={<GraduationCapIcon color="white" size="37" />}  
                     title="Diplomas" 
              />

              <Diplomas />
       </>
       );
}
