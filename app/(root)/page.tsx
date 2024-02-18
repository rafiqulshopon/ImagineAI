import { UserButton } from '@clerk/nextjs';

const Home = () => {
  return (
    <div>
      <p className='mb-4'>Home</p>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default Home;
