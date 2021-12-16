import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { TrialForm } from '../../../components/shared/templates/TrialPeriod/shared/TrialForm/TrialForm';

const TrialCorporatePage: NextPage = () => {
  const { asPath } = useRouter();

  const path = asPath?.split('/')[2];
  const color = '#4BCA59';

  return (
    <>
      <TrialForm pagepath={path} color={color} />
    </>
  );
};

export default TrialCorporatePage;
