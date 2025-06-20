'use server'

import { z } from 'zod'

// フォームデータの型定義
const ProfileSchema = z.object({
  name: z.string().min(1, { message: '氏名は必須です' }),
  email: z.string().email({ message: '有効なメールアドレスを入力してください' }),
  department: z.string().optional(),
  emailNotifications: z.boolean().optional(),
})

export interface ProfileFormState {
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    department?: string[]
  }
}

export async function updateProfile(
  prevState: ProfileFormState,
  formData: FormData
): Promise<ProfileFormState> {
  // フォームデータを解析
  const validatedFields = ProfileSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    department: formData.get('department'),
    emailNotifications: formData.get('emailNotifications') === 'true',
  })

  // バリデーション失敗時
  if (!validatedFields.success) {
    return {
      message: '入力内容に誤りがあります。',
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // ここで実際のデータベース更新処理を行う
  // 今回はシミュレーション
  try {
    // データベース更新のシミュレーション
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    console.log('Profile updated:', validatedFields.data)
    
    return {
      message: 'プロフィールが正常に更新されました。',
    }
  } catch {
    return {
      message: 'プロフィールの更新中にエラーが発生しました。',
    }
  }
} 