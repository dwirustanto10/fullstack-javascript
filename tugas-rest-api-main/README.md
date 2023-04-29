# tugas-rest-api

> PERTANYAAN INTERVIEW, jadi pastikan kalian pelajari benar2 ya.

## Tasks

A. API

1. Apa itu API dan REST API?
   Jawab: API singkatan dari Apllication Programming Interface, adalah serangkaian standar dan protokol yang mengintegrasi user dengan aplikasi sehingga pengguna bisa mengakses dan menggunakan fungsi software aplikasi tersebut. API menjadi penghubung antara client dan database.
   Sedangkan Rest API (Representational State Transfer API) adalah Gaya arsitektural perangkat lunak yang di dalamnya mendefinisikan aturan-aturan untuk menbuat web service. REST API adalah aturan-aturan yang mengatur request dan response

2. Apa itu Web API?
   Jawab: web API adalah salah satu bagian dari API, yaitu sebuah sistem perangkat lunak yang dibuat unutk mendukung interoperabilitas/interaksi antar 2 aplikasi yang berbeda melalui jaringan.

3. Apa istilah _request_ dan _response_ dalam REST API?
   Jawab: client melakukan permintaan ke database melalui API disebut request, sedangkan jawaban dari database ke client melalui API disebut response

4. Sebutkan 5 HTTP Method yang kamu ketahui?
   Jawab: GET, POST, PUT, DELETE, CONNECT

5. Apa fungsi dari software Postman?
   Jawab: sebuah aplikasi yang berfungsi sebagai REST CLIENT untuk uji coba REST API

B. NPM

1. Apa arti dan singkatan dari NPM?
   Jawab: Node Package Manager

2. Apa itu Yarn, apakah sama dengan NPM?
   Jawab: Yarn adalah dependency manager JavaScript yang dibuat oleh Facebook, Google, Exponent, dan Tilde
   Yarn dan NPM sama sama Javascript package manager

3. Apa fungsi dari _package.json_?
   Jawab: untuk memudahkan proses identifikasi, pengelolaan, dan penginstalan package

4. Apa perbedaan _dependencies_ dan _devDependencies_ dalam package.json?
   Jawab: dependencies menyertakan semua package pihak ketiga yang diperlukan agar proyek Anda bisa berjalan. sedangkan devDependency berisi package yang hanya diperlukan selama proses development.

5. Apa _command_ jika ingin menginstall package _express_ dalam npm?
   Jawab: npm install express

C. JSON

1. Apa singkatan dari JsOn ?
   Jawab: JavaScript Object Notation

2. Sebutkan tipe data dalam JsOn ?
   Jawab: Boolean, Array, String, Object, Number, Null

D. HTTP Status Code

1. Appa itu HTTP Status Code?
   Jawab: Status yang dikirimkan dari REST server ke REST client

2. Apa fungsi HTTP Status Code?
   Jawab: agar client bisa paham kode error yang ditampilkan oleh server mengenai status permintaan klien saat mengakses halaman web

3. Sebutkan status code jika Error dalam Internal server?
   Jawab: 500

4. Apa beda nya 200 dan 201?
   Jawab: 200 : Respon standar untuk permintaan HTTP yang berhasil. sedangkan 201 adalah Permintaan telah terpenuhi, menghasilkan penciptaan sumber daya baru.

5. Jika api memberikan _response_ tidak menemukan data, apa status code nya?
   Jawab: 404

E. Express.js

1. Apa itu express.js?
   Jawab: Express.js adalah framework web app untuk Node.js yang ditulis dengan bahasa pemrograman JavaScript

2. Mengapa dalam pembuatan API, lebih baik menggunakan Express.js dari pada Node.js murni?
   Jawab: Dengan ExpressJS kita dapat mempersingkat waktu untuk memulai proses development dan juga memudahkan kita dalam pembuatan sebuah aplikasi NodeJS

## Referensi

1. [Rest API](https://www.youtube.com/watch?v=vQJJ_K1JbEA&list=PLFIM0718LjIW7AsIbnhFg15t9yx4H-sQ0)
2. [Apa itu REST API](https://www.hostinger.co.id/tutorial/apa-itu-restful-api)
3. [HTTP Status Code](https://glints.com/id/lowongan/http-status-code-adalah/#.ZBFeCHZBzrc)
