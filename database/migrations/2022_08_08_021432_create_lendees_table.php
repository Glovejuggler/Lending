<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLendeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lendees', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->string('address', 64);
            $table->string('contact_number', 20);
            $table->date('birthdate');
            $table->string('subsidiary', 64);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lendees');
    }
}
