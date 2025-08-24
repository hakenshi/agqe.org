import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { path, secret } = await request.json();
    
    // Verificar se o secret está correto (opcional, para segurança)
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // Revalidar a página específica ou todas as páginas
    if (path) {
      revalidatePath(path);
    } else {
      // Revalidar páginas principais
      revalidatePath('/');
      revalidatePath('/projetos');
      revalidatePath('/eventos');
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}