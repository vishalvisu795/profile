# Testing Railway API from Local Frontend

## Setup Complete ✅

1. ✅ Created `.env` file with Railway API URL
2. ✅ Railway API is accessible and working
3. ✅ Frontend configured to use Railway API

## Current Configuration

- **Local Frontend**: `http://localhost:3000`
- **Railway Backend**: `https://profile-production-a4cc.up.railway.app`
- **Environment Variable**: `REACT_APP_API_URL=https://profile-production-a4cc.up.railway.app`

## Testing Steps

### 1. Start Frontend (if not already running)

```bash
cd frontEnd
npm start
```

The frontend will open at `http://localhost:3000`

### 2. Test the Contact Form

1. **Open Browser**:
   - Navigate to `http://localhost:3000`
   - Go to the **Contact** section

2. **Open Developer Tools**:
   - Press `F12` or `Right-click → Inspect`
   - Go to **Console** tab
   - Go to **Network** tab (to see API requests)

3. **Fill Out Contact Form**:
   - Name: `Test User`
   - Email: `test@example.com`
   - Message: `Testing Railway API from local frontend`

4. **Submit Form**:
   - Click **"Send Message"** button
   - Watch the Network tab for the API request
   - Check Console for any errors

### 3. Expected Results

✅ **Success**:
- Form submits successfully
- Success message appears: "Thank you for your message! I will get back to you soon."
- No CORS errors in console
- Request shows `200 OK` in Network tab
- Data is stored in MongoDB

❌ **If CORS Error**:
- Check Railway environment variable `ALLOWED_ORIGINS` includes `http://localhost:3000`
- Verify backend has been redeployed after updating CORS
- Check Railway logs for CORS configuration

### 4. Verify Data in MongoDB

1. Go to MongoDB Atlas Dashboard
2. Navigate to your database: `user_db`
3. Check collection: `customer_details`
4. You should see the test entry

## Troubleshooting

### CORS Error Still Appearing

**Check Railway Environment Variables**:
1. Go to Railway → Your Service → Variables
2. Verify `ALLOWED_ORIGINS` includes: `http://localhost:3000`
3. If not, add it and redeploy

**Check Backend Logs**:
1. Railway → Your Service → Logs
2. Look for: `🌐 Allowed CORS origins: [...]`
3. Should include `http://localhost:3000`

### API Not Responding

**Test Backend Directly**:
```bash
curl https://profile-production-a4cc.up.railway.app/health
```

Should return:
```json
{"status":"ok","database":"connected","timestamp":"..."}
```

### Frontend Not Loading

**Check .env File**:
```bash
cd frontEnd
cat .env
```

Should show:
```
REACT_APP_API_URL=https://profile-production-a4cc.up.railway.app
```

**Restart Frontend**:
- Stop the server (Ctrl+C)
- Start again: `npm start`

## Quick Test Commands

### Test Backend Health
```bash
curl https://profile-production-a4cc.up.railway.app/health
```

### Test Backend API
```bash
curl -X POST https://profile-production-a4cc.up.railway.app/api/customers \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

### Check CORS Configuration
```bash
curl -I -X OPTIONS https://profile-production-a4cc.up.railway.app/api/customers \
  -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: POST"
```

Should return headers including:
```
Access-Control-Allow-Origin: http://localhost:3000
```

## Next Steps

Once local testing works:
1. ✅ Update Vercel environment variable
2. ✅ Redeploy Vercel frontend
3. ✅ Test from production URL

