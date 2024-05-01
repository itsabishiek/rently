import Image from "next/image";

type LoaderProps = {};

const Loader: React.FC<LoaderProps> = () => {
  return <Image src="/loader.gif" alt="" width={30} height={30} unoptimized />;
};
export default Loader;
