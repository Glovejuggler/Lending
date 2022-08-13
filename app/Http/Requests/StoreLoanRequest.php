<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLoanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'lendee_id' => 'required',
            'principal' => 'required|numeric',
            'rate' => 'required|numeric',
            'term' => 'required|numeric',
            'amortization' => 'required|numeric',
            'maturity' => 'required|date'
        ];
    }
}
