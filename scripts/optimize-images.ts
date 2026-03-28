import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const imagesToOptimize = [
  // Hero (Dimensions doubled for high-DPI support)
  { name: 'hero-chocolates', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfXs1cyOBRTfh4rhpugcOgRBw5pu_ImOZPHA1Sie3Bh-4wDyGXGTK37K6YgI2ZoQnrKj_WnIssoeR3-n2Jgag-ghfRsD9QkiIyLdgFsNaBLesAVaS79aj8HijizY_vXctJmSvhUlNscnn07vos46ReIkAoh94KlXkTvtvqVyqtMXKWz3NvcQsBDIYao9M3E-pMa8wlANHkv8KQib6ot02PbdRSHbKqKrrxidzQ-KRAvnD8o9lPtAD8s8FntkurYXchn1iLh0uxbPQ', width: 800, height: 1600 },
  { name: 'hero-soft-drinks', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAatOQaZCt3lpbDm4D3hP4q6cmqB_xGUNForBRwizUhCctMXBVoR8CbaTB8XB5aW-qPs9tIq6g_oxpX5hN1dvC80Ui6AXYk5SofGgnJpr37VUzm2ucE3UGe17YiN4dh4BO5d8zQ_lwXaDM8mchdKqiBfCk78wQ4NA6IdLdZFaeIGo5U9qHXHNoTyQaq_L3czCZUNS1Cw-hHHK3HHqcG-ylKElIrazSOb8TMcChbzpP5ypmAvyDncTFEvgp5GC_qWn7ZK_4SNBt4Rcc', width: 1600, height: 800 },
  { name: 'hero-gummies', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbmzjmUMx5OGDeDljNQ7Vo8q9QWzqCKaKYLM7JBA9GhDuGi3xdnM-uC17LWbi9yf_urj4iCX1VnqDKuKmwiQXZZYjxuTTqxrwmyWLsK0wuF9VsDwm4BFi3Bt8a6iYMM2XsNNnBRPRXXASCXT9zZ6vJgC_C-bgx5wLZauFx89FJjCwRDsJPjNSbHNK1dis7-y0_crZPXEgOxUTfKXq6DsIbgKCMli5DBXkcZDXzqonTZX0zSGe-taTqNa8gB5ezpR-CboJ15eo6xSs', width: 800, height: 800 },
  { name: 'hero-barista', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOsW2rvth7u4muzk5c1mpUy-cQXP3qPZnhuZvyqEvjzw_yM6t7SarwU57ssoh3ti4vfKoEEZOZIzE8NPgPmgH46BzM05Uz8GX6Ixl-Ow7_8jw6UB3qAYFozMlVPT2fBZA6xxtlyAEbFopFwLZWHv7ItdCH9X815RmLQBNXMJmCMZbj4Ce1aHWVcPI4nUQjMCRrlRKuUM6lnrMrDNecoUc38lnuvVrGKKZIaKp2dQsxB1MPyRxZGmlYVlUTP6ZOiK1eD6q-v7PiHpI', width: 800, height: 800 },
  { name: 'hero-velvetiser', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7ot6nGJ_8b-UoFWBNbQvvJGAOvA2EoC6Obiz7EYymTbM2goAhj_ySn7DBIk-QYRS8Irne4QHW_sML6yot7MxT4biPhGBxKV0PXWYS1llHN6ANVmokNUo6Y8Y7vSu59iZgfqVtSW1U1vO7hjZ_3uzUzgkX7KRq0ghUHwudwAI0njQ9CKqFYrrlaqw4NmdzCYj-hT5_S7Ma4Di9WpqhHoyTV0hAhZbdIOrdyUwX21J0daokCvMRuxx4lxuQQG3dTsQRTjUWPJ_smY', width: 1600, height: 800 },

  // Categories
  { name: 'cat-confectionery', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDshnXenGyloWwRahm2qSrZsCISvULWTKuQ-Hs-0Pa_lj3r0vIf2m0m8aR0v4Upcn9Xs0CnVdnSvlJZUsgqs8hst_vjrb9tayPQ1dUx7_hUtInlqnrWR-Kju4kXzk9j7hnoPa4z054u19psCI2BVsDOe247nK9oiTeC6lXjLJtRtgmoiGoXgER0jHTKtnZmqCyH8n_AQVOjM6Tqiu4T2o3ACzfkDIDf5h1DA2pI5GSlafJcCPsRdR4ASSenJhl4YpnRvpIwISm-iwk', width: 1200, height: 1000 },
  { name: 'cat-soft-drinks', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwai3BtVZwiuUojQDZFWsd5JvX3CRZ3luEW5PeCqhcBi-VqoegGOBwzzmqfZ9vwVCkIw2KuiNnJEG3h2bwx6qAZsQzFqE7q4vbvAiBTEbDlg3zF67vXeCRAegmYA-gF81vok77wfip2UwYoCE9LMU6LazZemX-2Xy3G2GYpRtWNRVjClooh-pceoZa5new4m5n-I-QvrPKeBZdOAGHvNKL1aIEdEEeoihPlnIvGNSrPuLYqYIJqj93puHzl3dL8F93zc5e07abpNE', width: 1200, height: 1000 },
  { name: 'cat-hotel-chocolate', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNhApoiNEceLsOhiExKjWW7V1R-usYugS3Zz-w_mi59gl2BeaNX1T_O5ITtw1bYlQr98-rsZGuEnXoHxDggqoa-0Z8S96AMih_raosKENSd7ZX1vr570htB6XFLHQS1lNqriCLYnVPekHGYcpWT4cDoDrjrqU5miPLhGvJ4DKFEQUeyOW26c1iwNEwY5VLSOc_mCk-2210Jh-rDCFPYP4_p7epFM5oPNaMhIVyYlFWQlHtgAgBYX-EV60a4ls4AvSUdBe1FKl3iPo', width: 1200, height: 1000 },
  { name: 'cat-coffee', url: 'https://images.pexels.com/photos/33784542/pexels-photo-33784542.jpeg', width: 1200, height: 1000 },
  { name: 'cat-syrups', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADzblzAwNq69QZ8DKjh9m-h5ub_UAc_Rmp8iTA4iEe0VqdcQUB-JuXjtWlJ93hUDSoG0avdT-WVslpBR6omInWd-CwtL71UQQOVla6UXQVTJ0Q4_DMkkqeQI5vi_RmaEOxKvar8JkaZ6jmQocrXo4FVpC0OsBmqGWT3pvc36gkveZgjK1rdMxBGY0Wq6cZpNdpcpI164u9LJHadC_2WiiEw6Wrwkcwxgp3r3KaS8SG6Na6uANaY79MAqJ_spsV5lpM_9NvtPbhzls', width: 1200, height: 1000 },
  { name: 'cat-infusion', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsd-k6JsGLuXt_mQk6NBYDp7qgsY2GxhKYY_vKOg7PbCMhezdJ7Gggg6MFeaaAs7h-BXAUydxICpWZ-Cx3pIXCBXe3YeXMw3sTnccqFgklmht8YKZhp4esPiXWFbe3LWYHjfOGZEGD-wnOYQ0ASnNcXh1_bP04imY4-PgVU02ptUY5CUo0hhwV_AVhZ8TQkwYgbrNAjMYaSAo3xBVh0sVToCQO832i0cH3YEoePLTRDu1aoKKaFrMPPqCS61TBuYQLOqEjC5ohYp4', width: 1200, height: 1000 },

  // About
  { name: 'about-warehouse', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4A9WM1N_X8kCSTOlxyiO1ldayDv6_Zqt6Bo81zdDS421YM0ZfUksr8yv-uEDbnTUX9733IkSoxWZUKTyvo6XW6Q5AjMwl2mDCNhO4C9HMOwUwqeS5Uc6UseDCl0WonG-9Vihi6SjNEF9L4O6q2bWvHohfyQwfYIeeS6Tu0uvHf1AVZZdqiXHLmhw3yb3GjbLgP-TLlJcyq0GYfoACxv46F2ajPnhhU9bQ0iC2x340F6rx28dL51m9mASuyR598FnGaMFQdWxpUJs', width: 2000, height: 1600 }
];

async function downloadAndOptimize() {
  const outputDir = path.join(process.cwd(), 'static/images');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  for (const img of imagesToOptimize) {
    try {
      console.log(`Processing ${img.name} (${img.width}x${img.height})...`);
      const response = await axios.get(img.url, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data);

      await sharp(buffer)
        .resize({
          width: img.width,
          height: img.height,
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 70 })
        .toFile(path.join(outputDir, `${img.name}.webp`));

      console.log(`✅ ${img.name}.webp created.`);
    } catch (error) {
      console.error(`❌ Failed to process ${img.name}:`, error.message);
    }
  }
}

downloadAndOptimize();
