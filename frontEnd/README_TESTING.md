# Testing Railway Backend API from Frontend

## ✅ Configuration Complete

The frontend is now configured to use the Railway backend API.

## Current Setup

- **Railway Backend URL**: `https://profile-production-a4cc.up.railway.app`
- **Environment Variable**: Set in `.env` file
- **Frontend Code**: Updated to use environment variable

## How to Test

### Option 1: Test Locally

1. **Start Frontend**:
   ```bash
   cd frontEnd
   npm start
   ```

2. **Open Browser**:
   - Navigate to `http://localhost:3000`
   - Open Developer Tools (F12) → Console tab
   - You should see: `🔗 API URL: https://profile-production-a4cc.up.railway.app`

3. **Test Contact Form**:
   - Go to Contact section
   - Fill out the form:
     - Name: `Test User`
     - Email: `test@example.com`
     - Message: `Testing Railway API`
   - Click "Send Message"
   - Check console for API call logs
   - Verify success message appears

### Option 2: Test from Vercel (Production)

1. **Update Vercel Environment Variable**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Update `REACT_APP_API_URL`:
     - Value: `https://profile-production-a4cc.up.railway.app`
     - Environments: All (Production, Preview, Development)
   - Save and redeploy

2. **Visit Your Vercel Site**:
   - Go to: `https://profile-two-lilac.vercel.app`
   - Test the contact form
   - Check browser console for API calls

## Verification Steps

### 1. Check API URL is Correct

Open browser console and you should see:
```
🔗 API URL: https://profile-production-a4cc.up.railway.app
```

### 2. Test Backend Health

Visit: `https://profile-production-a4cc.up.railway.app/health`

Should return:
```json
{
  "status": "ok",
  "database": "connected",
  "timestamp": "..."
}
```

### 3. Test API Endpoint Directly

```bash
curl -X POST https://profile-production-a4cc.up.railway.app/api/customers \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

### 4. Check Network Tab

1. Open Browser DevTools → Network tab
2. Submit contact form
3. Look for request to: `https://profile-production-a4cc.up.railway.app/api/customers`
4. Check response status: Should be `200 OK`

## Expected Behavior

✅ **Success**:
- Form submits without errors
- Success message: "Thank you for your message! I will get back to you soon."
- No CORS errors in console
- Request shows `200 OK` in Network tab
- Data appears in MongoDB Atlas

❌ **If Errors**:
- Check browser console for error messages
- Check Network tab for failed requests
- Verify Railway backend is running
- Check CORS configuration in Railway

## Troubleshooting

### CORS Error

**Error**: `Access to fetch at '...' has been blocked by CORS policy`

**Solution**:
1. Check Railway → Variables → `ALLOWED_ORIGINS`
2. Should include: `http://localhost:3000,https://profile-two-lilac.vercel.app`
3. Redeploy backend after updating

### API URL Not Updating

**Issue**: Still using old URL

**Solution**:
1. Stop frontend server (Ctrl+C)
2. Delete `.env` file and recreate it
3. Restart: `npm start`
4. Hard refresh browser (Ctrl+Shift+R)

### Network Error

**Error**: `Failed to fetch` or `Network request failed`

**Solution**:
1. Verify Railway backend is running
2. Test backend directly: `curl https://profile-production-a4cc.up.railway.app/health`
3. Check Railway logs for errors

## Files Modified

- ✅ `frontEnd/src/components/Contact.js` - Updated to use Railway API URL
- ✅ `frontEnd/.env` - Created with Railway backend URL
- ✅ Environment variable properly configured

## Next Steps

1. ✅ Test locally first
2. ✅ Verify data is stored in MongoDB
3. ✅ Update Vercel environment variable
4. ✅ Test from production URL

Your frontend is now ready to connect to Railway backend! 🚀

