def detect_device(request):
    user_agent = request.META.get('HTTP_USER_AGENT', '').lower()
    is_mobile = 'mobile' in user_agent or 'android' in user_agent or 'iphone' in user_agent

    return {
        'is_mobile': is_mobile
    }