<?php

namespace App\Http\Controllers;

use App\Repositories\ContactFormRepository;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{

    public function create()
    {
        return view('welcome');
    }
    public function store(Request $request, ContactFormRepository $contactRepo)
    {
        // return response()->json(['data' => $_SERVER['HTTP_X_FORWARDED_FOR']]);
        $messages = [
            'name.required' => 'É obrigatorio informar o nome',
            'email.required' => 'É obrigatorio informar o email',
            'email.email' => 'Informe um email válido',
            'phone.required' => 'É obrigatorio informar o telefone',
            'phone.min' => 'Informe um telefone válido',
            'phone.max' => 'Informe um telefone válido',
            'file.required' => 'É obrigatório anexar um arquivo',
            'file.mimes' => 'São aceitos apenas arquivos do tipo:pdf,doc,docx,odt,txt',
            'message.required' => 'O campo mensagem é obrigatório'
        ];
        $validator = \Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|min:10|max:12',
            'file' => 'required|max:500|mimes:pdf,txt,doc,docx,odt',
            'message' => 'required'
        ], $messages);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()], 422);
        }
        $file = $request->file('file')->store('files');
        $data = [
            'ip' => $request->ip(),
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'file' => storage_path() . '/' . $file,
            'message' => $request->message
        ];
        $contact = $contactRepo->create($data);
        return response()->json(['message' => 'Obrigado por entrar em contato!']);
    }
}
