import Header from '@/components/shared/Header';
import TranformationForm from '@/components/shared/TranformationForm';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const tranformation = transformationTypes[type];
  const { userId } = auth();

  if (!userId) redirect('/sign-in');
  const user = await getUserById(userId);
  return (
    <>
      <Header title={tranformation.title} subtitle={tranformation.subTitle} />
      <TranformationForm
   
        action="Add"
        userId={user._id}
        type={tranformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTransformationTypePage;
