import './globals.css';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <section id={'header'}>
                    <Header/>
                </section>
                <main>
                    {children}
                </main>
                <section id={'footer'}>
                    <Footer/>
                </section>
            </body>
        </html>
    );
}
