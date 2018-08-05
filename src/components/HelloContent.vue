<template>
    <Layout>
    <div class="content">
        <img src="../assets/logo.png">
        <h1>hello content</h1>
        <input type="file" id='upload' name="upload"  multiple="multiple" @change="uploadFile($event);" style="display:none;" />
        <button id='uploadbtn' class="rscUploadBtn" type="button" onclick="document.getElementById('upload').click();" >选择上传文件</button>
    </div>
    </Layout>
</template>

<script>
    import Layout from './public/Layout.vue'
    export default {
        name: 'HelloContent',
        props: {
            msg: String
        },
        components: {
            Layout
        },
        methods: {
            uploadFile (e) {
                var files = e.target.files
                var fd = new FormData();
                for (var i = 0; i < files.length; i++) {
                    fd.append(`file[${i}]`,files[i]);
                }

                console.log(fd.getAll)
            }
        }
    }
</script>