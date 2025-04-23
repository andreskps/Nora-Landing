import { NextResponse } from 'next/server';
import { executeQuery, QueryResult } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { name, phone, phoneCode,  } = await request.json();
    
    // Validación básica
    if (!name || !phone) {
      return NextResponse.json({ error: 'Todos los campos son requeridos' }, { status: 400 });
    }
    
    const fullPhone = `${phoneCode}${phone}`;
    
    // Insertar en la base de datos
    const result = await executeQuery({
        query: 'INSERT INTO usuarios_landing (nombre, telefono, created_at) VALUES (?, ?, NOW())',
        values: [name, fullPhone],
      });
    
    // Verificar si hay error usando verificación de tipo
    if ('error' in result) {
      console.error('Error en la base de datos:', result.error);
      return NextResponse.json({ error: 'Error al guardar en la base de datos' }, { status: 500 });
    }
    
    return NextResponse.json({ success: true, userId: result.insertId });
  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
  }
}