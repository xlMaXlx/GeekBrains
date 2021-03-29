const strQ = "Hello \'World\' Lorem ipsum \'dolor\' sit amet, \'consectetur\' adipisicing elit. \'Vitae\', et, libero. Dicta blan\'ditiis debi\'tis incidunt, \"totam\" vitae \'eius\' fugit , \'ipsum\' tempore \"corporis\", provident \'dolorem\', quod dol\'or at su\'nt neque.";
const regexpQ = /([\s\,\.])[']([\w\s]+)[']([\s\,\.])/gi;
console.log(strQ.replace(regexpQ, '$1"$2"$3'));



