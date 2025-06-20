'use client'

import { useActionState } from 'react'
import { updateProfile, type ProfileFormState } from '../actions/profile'
import ImageUploadButton from './ImageUploadButton'
import TextInput from './TextInput'
import ToggleSwitch from './ToggleSwitch'
import Button from './Button'

const initialState: ProfileFormState = {
  message: '',
  errors: {}
}

export default function ProfileEditForm() {
  const [state, formAction, pending] = useActionState(updateProfile, initialState)

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-2xl">
        <form action={formAction} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* タイトル */}
          <h2 className="text-2xl font-bold text-[#333333] mb-8">プロフィール編集</h2>
          
          {/* アバター部分 */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <svg 
                className="w-12 h-12 text-gray-400" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <ImageUploadButton />
          </div>

          {/* 名前フィールド */}
          <div className="mb-6">
            <TextInput 
              label="氏名"
              name="name"
              placeholder="山田 太郎"
              required
              supportText="氏と名を空白で区切ってください。"
              error={state.errors?.name?.[0]}
            />
          </div>

          {/* メールアドレスフィールド */}
          <div className="mb-6">
            <TextInput 
              label="メールアドレス"
              name="email"
              type="email"
              placeholder="taro.yamada@example.com"
              required
              error={state.errors?.email?.[0]}
            />
          </div>

          {/* 部署フィールド */}
          <div className="mb-8">
            <TextInput 
              label="部署"
              name="department"
              placeholder="開発部"
              required={false}
              error={state.errors?.department?.[0]}
            />
          </div>

          {/* 通知設定 */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <label className="text-[#333333] font-bold text-base leading-[1.7]">
                メール通知を有効にする
              </label>
              <ToggleSwitch name="emailNotifications" />
            </div>
          </div>

          {/* エラーメッセージ */}
          {state.message && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{state.message}</p>
            </div>
          )}

          {/* アクションボタン */}
          <div className="flex justify-end gap-4">
            <Button 
              type="button" 
              variant="outlined"
              size="large"
            >
              キャンセル
            </Button>
            <Button 
              type="submit" 
              variant="solid"
              size="large"
              disabled={pending}
            >
              {pending ? '保存中...' : '保存する'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 