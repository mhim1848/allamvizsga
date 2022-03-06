import Head from "next/head";
import DisplayList from "../components/DisplayList";
import Toggle from "../components/Toggle";

export default function Home() {
	return (
		<>
			{/* Head is a Next.js Component
      It's a wrapper around the native <head /> tag
      note: only put a Head component into _app if you want
      those properties to consist throughout every page */}
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DisplayList
				listData={[
					{ id: 1, data: "i am data with id 1" },
					{ id: 2, data: "I am data with id 2" },
				]}
			/>
			<Toggle />
		</>
	);
}
