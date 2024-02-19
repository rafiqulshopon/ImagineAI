import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { Header } from '@/components/shared';
import { transformationTypes } from '@/constants';

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect('/sign-in');

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
    </>
  );
};

export default AddTransformationTypePage;
