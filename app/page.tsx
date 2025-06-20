import Link from 'next/link';
import ProfileEditForm from './components/ProfileEditForm';
import { Button } from './components/mono-x/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-mono-x-white py-8">
      <div className="container mx-auto px-4">
        {/* MONO-X Header */}
        <header className="text-center mb-12">
          <h1 className="heading-xl text-mono-x-black mb-4 font-mono-x-sans">
            MONO-X
          </h1>
          <p className="body-large text-mono-x-deep-gray mb-8">
            Rewrite the Standard.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/data-table">
              <Button variant="primary" size="large">
                データテーブルを見る
              </Button>
            </Link>
          </div>
        </header>
        <ProfileEditForm />
      </div>
    </div>
  );
}
