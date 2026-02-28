const pesan = $('Webhook').first().json.body.payload.body; // Mengambil pesan
const api = "e2ab17a08b1944d94b0428dfa6e135c5fbe6cc031bc47f75981613deb05c4970";

// untuk mencocokkan semua format nomor resi
const ekspedisi = {
    jne: /(58)(\d{10})/,
    pos: /(18)(\d{9})/,
    jnt: /(JD|JZ|JX)(\d{10})|(13)(\d{8})/,
    jnt_cargo: /(200)(\d{10})/,
    sicepat: /(00)(\d{10})/,
    tiki: /(03)(\d{10})/,
    anteraja: /(11)(\d{12})/,
    wahana: /(AGN)(\d{5})/,
    ninja: /(NVIDRATHT)(\d{9})/,
    lion: /(11LP)(\d{13})/,
    ide: /(IDS)(\d{12})/,
    spx: /(SPXID)(\d{12})/,
    sap: /(MIS)(\d{16})/,	
    lex: /(LXAD-)(\d{10})/,
    indah_cargo: /(PNG1CS)(\d{11})/,
    dakota: /(797)(\d{15})/,
    kurir_tokopedia: /(TKP01-)(\d{7})/
};

const words = pesan.split(" ");
let data = null;

for (const word of words) {
    for (const [courier, regex] of Object.entries(ekspedisi)) {
        const match = word.match(regex);
        if (match) {
            data = { courier, resi: match[0] }; // Menyimpan nama kurir dan nomor resi
            break; // Keluar dari loop setelah menemukan nomor resi
        }
    }
    if (data) break; // Keluar dari loop utama jika sudah menemukan resi
}

return [{ json: { data, api, pesan} }];
