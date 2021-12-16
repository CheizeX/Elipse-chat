import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { TrialForm } from '../../../components/shared/templates/TrialPeriod/shared/TrialForm/TrialForm';

const TrialBusinessPage: NextPage = () => {
  const { asPath } = useRouter();

  const path = asPath?.split('/')[2];
  const color = '#EC3B63';

  return (
    <>
      <TrialForm pagepath={path} color={color} />
    </>
  );
};

export default TrialBusinessPage;
