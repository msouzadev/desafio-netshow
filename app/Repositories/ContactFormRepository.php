<?php

namespace App\Repositories;

use App\ContactForm;

class ContactFormRepository extends ContactForm
{

    public function crate(array $data)
    {
        return ContactForm::create($data);
    }
}
