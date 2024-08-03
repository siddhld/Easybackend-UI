'use client'
import React, { useState } from 'react';
import EndpointDisplay from '../components/EndpointDisplay';
import ConfirmDialog from '../components/ConfirmDialog';

interface EndpointsProps {
  uniqueKey: string;
}

const EndpointsPage: React.FC<EndpointsProps> = ({ uniqueKey }) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);

  const handleBack = () => {
    setShowConfirmDialog(true);
  };

  const confirmBack = () => {
    setShowConfirmDialog(false);
    window.location.href = '/'; // Navigate to homepage
  };

  const cancelBack = () => {
    setShowConfirmDialog(false);
  };

  return (
    <>
      <EndpointDisplay uniqueKey={uniqueKey} onBack={handleBack} />
      {showConfirmDialog && <ConfirmDialog onConfirm={confirmBack} onCancel={cancelBack} />}
    </>
  );
};

export default EndpointsPage;
