import dynamic from 'next/dynamic';
const Infra = dynamic(() => import("@/components/Infra"));
const Stats = dynamic(() => import("@/components/Stats"));

export function generateMetadata() {
    return {
        title: "Infrastructure | Dhirendra Soya",
        description: "Discover the state-of-the-art infrastructure at Dhirendra Soya, built to support advanced agricultural research, production, and sustainability initiatives.",
    };
}

const page = () => {
    return (
        <div className='pt-5'>
            <Infra />
            <Stats />
        </div>
    )
}

export default page
