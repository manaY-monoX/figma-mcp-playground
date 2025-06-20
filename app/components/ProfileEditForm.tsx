'use client'

import { useActionState } from 'react'
import { updateProfile, type ProfileFormState } from '../actions/profile'
import { Button } from './mono-x/Button'
import { Input } from './mono-x/Input'
import ImageUploadButton from './ImageUploadButton'
import ToggleSwitch from './ToggleSwitch'

const initialState: ProfileFormState = {
  message: '',
  errors: {}
}

export default function ProfileEditForm() {
  const [state, formAction, pending] = useActionState(updateProfile, initialState)

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-2xl">
        <form 
          action={formAction} 
          className="card-mono-x p-8"
          noValidate
          aria-describedby={state.message ? "form-message" : undefined}
        >
          {/* タイトル */}
          <h2 className="heading-medium text-mono-x-black mb-8 font-mono-x-sans">
            プロフィール編集
          </h2>
          
          {/* アバター部分 */}
          <div className="flex items-center gap-6 mb-8">
            <div 
              className="w-20 h-20 bg-mono-x-gray rounded-full flex items-center justify-center overflow-hidden"
              role="img"
              aria-label="現在のプロフィール画像"
            >
              <svg 
                className="w-12 h-12 text-mono-x-deep-gray" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <ImageUploadButton />
          </div>

          {/* 名前フィールド */}
          <div className="mb-6">
            <Input 
              label="氏名"
              name="name"
              type="text"
              placeholder="山田 太郎"
              required
              supportText="氏と名を空白で区切ってください。"
              error={state.errors?.name?.[0]}
              autoComplete="name"
            />
          </div>

          {/* メールアドレスフィールド */}
          <div className="mb-6">
            <Input 
              label="メールアドレス"
              name="email"
              type="email"
              placeholder="taro.yamada@example.com"
              required
              error={state.errors?.email?.[0]}
              autoComplete="email"
            />
          </div>

          {/* 部署フィールド */}
          <div className="mb-8">
            <Input 
              label="部署"
              name="department"
              type="text"
              placeholder="開発部"
              error={state.errors?.department?.[0]}
              autoComplete="organization-title"
            />
          </div>

          {/* 通知設定 */}
          <div className="mb-8">
            <fieldset className="flex items-center justify-between">
              <legend className="text-mono-x-black font-bold text-mono-x-base leading-relaxed">
                メール通知を有効にする
              </legend>
              <ToggleSwitch name="emailNotifications" />
            </fieldset>
          </div>

          {/* エラーメッセージ */}
          {state.message && (
            <div 
              id="form-message"
              className="mb-6 p-4 bg-mono-x-error/10 border border-mono-x-error/20 rounded-lg"
              role="alert"
              aria-live="polite"
            >
              <p className="text-mono-x-error text-mono-x-sm leading-relaxed">
                {state.message}
              </p>
            </div>
          )}

          {/* アクションボタン */}
          <div className="flex justify-end gap-4">
            <Button 
              type="button" 
              variant="secondary"
              size="large"
            >
              キャンセル
            </Button>
            <Button 
              type="submit" 
              variant="primary"
              size="large"
              disabled={pending}
              aria-describedby={pending ? "saving-status" : undefined}
            >
              {pending ? '保存中...' : '保存する'}
            </Button>
            {pending && (
              <span 
                id="saving-status" 
                className="sr-only" 
                aria-live="polite"
              >
                プロフィールを保存しています。しばらくお待ちください。
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  )
} 