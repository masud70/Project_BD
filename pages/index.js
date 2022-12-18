import { GoogleMap } from "@react-google-maps/api";
import Head from "next/head";
import Link from "next/link";
import GMap from "../components/map/GMap";

export default function Home() {
    return (
        <>
            <Head>
                <title>Project BD</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div
                    style={{
                        backgroundImage: "url(" + "./images/bg.jpg" + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="min-w-screen min-h-screen flex items-center justify-center flex-col"
                >
                    <div className="font-bold text-5xl text-slate-700 text-center">
                        Bangladesh Ongoin Project Overview
                    </div>
                    <Link href="/project-map" className="font-bold text-slate-500 text-2xl hover:bg-slate-500 py-2 px-4 rounded-xl hover:text-slate-200 transition-all delay-150 my-2 hover:bg-opacity-75">View Project Map Now</Link>
                </div>
            </main>
        </>
    );
}
