import { LandingPage } from "~/landing/landing-page";
import {LanguageProvider} from "~/components/language/language-context";

export default function Landing(){
    return <LanguageProvider>
        <LandingPage/>
    </LanguageProvider>
};