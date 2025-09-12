'use client';
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

// @ts-ignore – Next.js bug with intercepting routes

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
